import fbxList from "./fileList";
import { saveAs } from "file-saver";
import { ANIMATION_SOURCE } from "@/dl-viewer/path";
import * as THREE from "three";
import { myFetch } from "@/helper/myFetch";

const dir = `${ANIMATION_SOURCE}/todo`;
const DOWNLOAD_LIMIT = 10;

let extraTranslate; // = new Float32Array([0, -2.5, -1]);

const setScale = false;
const scale = 1;
const rotate = {
    // x: true,
    // y: true,
    // z: true,
};

export async function processSummonClips() {
    const clips = await Promise.all(fbxList.map(loadClip));
    const processed = clips.map(processClip);
    exportAllAni(processed);
}

const exportAni = async ani => {
    const fileName = `${ani.name}.json`;
    const content = JSON.stringify(ani.toJSON());

    const blob = new Blob([content], { type: "text/plain" });

    saveAs(blob, fileName);
};

const exportAllAni = async animations => {
    let counter = 0;
    for (const ani of animations) {
        await exportAni(ani);

        counter = ++counter % DOWNLOAD_LIMIT;
        if (!counter) await pause(1000);
    }
};

/**
 * translate clip so that the end position will be 0, 0, 0
 * @param {THREE.AnimationClip} clip
 * @return {THREE.AnimationClip}
 */
const processClip = clip => {
    const { tracks } = clip;
    /**
     * @param {string} trackName
     */
    const findFirstTrack = trackName =>
        tracks.find(({ name }) => name.includes(trackName));

    const gameRootPosition =
        findFirstTrack("jGameRoot.position") || findFirstTrack("position");

    if (!gameRootPosition) {
        console.error(`Failed ${clip.name}`);
        return clip;
    }

    const endPosition = gameRootPosition.values.slice(-3).map(v => -v);
    translateTrack(gameRootPosition, endPosition);
    // rotatePositionY(gameRootPosition);
    extraTranslate && translateTrack(gameRootPosition, extraTranslate);

    const rootPosition = findFirstTrack("jRoot.position");
    if (rootPosition) {
        const e = rootPosition.values.slice(-3).map(v => -v);
        const [eX, eY, eZ] = e;
        if (eX ** 2 + eY ** 2 + eZ ** 2 > 1) {
            translateTrack(rootPosition, e);
        }
    }

    const rootQuaternion =
        findFirstTrack("jGameRoot.quaternion") || findFirstTrack("quaternion");

    rotate.x && rotateTrack(rootQuaternion, "x");
    rotate.y && rotateTrack(rootQuaternion, "y");
    rotate.z && rotateTrack(rootQuaternion, "z");

    if (setScale) {
        const scaleTrack =
            findFirstTrack("jGameRoot.scale") || findFirstTrack("scale");
        const { values } = scaleTrack;
        values.forEach((_, i) => (values[i] = scale));
    }

    return clip;
};

/**
 * resolved in msec ms
 * @param {number} msec
 */
const pause = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
};

/** get the path to the animation file
 * @param {string} name
 */
const getAniPath = name =>
    `${dir}/${name}${name.endsWith(".json") ? "" : ".json"}`;

/** load a single animation
 * @param {string} name
 * @return {Promise<THREE.AnimationClip>}
 */
function loadClip(name) {
    const path = getAniPath(name);
    return new Promise(resolve =>
        myFetch(path)
            .then(response => response.json())
            .then(json => THREE.AnimationClip.parse(json))
            .then(resolve)
    );
}

/**
 *
 * @param {THREE.KeyframeTrack} track
 * @param {Float32Array} offset
 */
const translateTrack = (track, [x, y, z]) => {
    const nKeyFrames = track.times.length;
    const { values } = track;
    for (let i = 0; i < nKeyFrames; i++) {
        values[i * 3] += x;
        values[i * 3 + 1] += y;
        values[i * 3 + 2] += z;
    }
};

/**
 * flip position around y axis
 * @param {THREE.VectorKeyframeTrack} track
 */
const rotatePositionY = track => {
    const nKeyFrames = track.times.length;
    const { values } = track;
    for (let i = 0; i < nKeyFrames; i++) {
        values[i * 3] *= -1;
        values[i * 3 + 2] *= -1;
    }
};

// /**
//  * rotate animation by 180 degrees on y axis
//  * @param {THREE.QuaternionKeyframeTrack} track
//  */
// const rotateTrackY = track => {
//     const nKeyFrames = track.times.length;
//     const { values } = track;
//     for (let i = 0; i < nKeyFrames; i++) {
//         values[i * 4 + 1] -= 1;
//     }
// };

const quaternion = {
    x: new THREE.Quaternion(1, 0, 0, 0),
    y: new THREE.Quaternion(0, 1, 0, 0),
    z: new THREE.Quaternion(0, 0, 1, 0),
};

/**
 * rotate animation by 180 degrees on specified axis
 * @param {THREE.QuaternionKeyframeTrack} track
 * @param {'x' | 'y' | 'z'} axis
 */
function rotateTrack(track, axis = "y") {
    const nKeyFrames = track.times.length;
    const { values } = track;
    const q = quaternion[axis] ?? quaternion.y;

    for (let i = 0; i < nKeyFrames; i++) {
        const currentQ = new THREE.Quaternion(
            ...values.slice(i * 4, i * 4 + 4)
        );
        const newQ = currentQ.multiply(q);
        values[i * 4] = newQ.x;
        values[i * 4 + 1] = newQ.y;
        values[i * 4 + 2] = newQ.z;
        values[i * 4 + 3] = newQ.w;
    }
}
