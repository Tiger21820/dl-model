import React, { lazy, Suspense, useContext, useCallback } from "react";

import { SettingsContext, DispatchContext } from "./context/SettingsContext";
import ModelViewer from "./ModelViewer";
import "./styles/Display.css";

import { faceOffsets, cameraPositions, controlsPositions } from "./consts";

const AniControl = lazy(() => import("./AniControl"));

function Display(props) {
    const { viewport } = props;

    const settings = useContext(SettingsContext);
    const {
        model: {
            id: modelId,
            texture,
            faceTexture,
            face,
            weaponRight,
            weaponLeft,
        },
        animation: { code: chainCode, timeScale },
        scene: { rotateSpeed, background: bgColor, initCameraPosition },
        app: { showAniControl, antiAliasing },
        capture: { enable: capture },
        outline: {
            enable: showOutline,
            color: outlineColor,
            size: outlineSize,
            opacity: outlineOpacity,
        },
    } = settings;

    const dispatch = useContext(DispatchContext);
    const toggleCapture = useCallback(() => {
        const action = {
            type: "toggle",
            key: "capture",
            value: "enable",
        };
        dispatch(action);
    }, [dispatch]);

    const faceOffset = faceOffsets[`face${face}`];

    const type = modelId[0];

    const defaultCameraPosition = cameraPositions[modelId]
        ? cameraPositions[modelId]
        : cameraPositions[type];

    const cameraPosition = initCameraPosition
        ? initCameraPosition.map((n, i) =>
              isNaN(n) ? defaultCameraPosition[i] : n
          )
        : defaultCameraPosition;

    const controlsPosition = controlsPositions[modelId]
        ? controlsPositions[modelId]
        : controlsPositions[type];

    return (
        <div className="Display">
            {showAniControl && (
                <div className="Display-AniControl">
                    <Suspense fallback={null}>
                        <AniControl value={settings.animation.timeScale} />
                    </Suspense>
                </div>
            )}
            <ModelViewer
                setIsLoading={props.setIsLoading}
                capture={capture}
                captureSetting={settings.capture}
                toggleCapture={toggleCapture}
                viewport={viewport}
                cameraPosition={cameraPosition}
                controlsPosition={controlsPosition}
                model={modelId}
                texture={texture}
                faceTexture={faceTexture}
                faceOffset={faceOffset}
                weaponRight={weaponRight}
                weaponLeft={weaponLeft}
                aniCode={chainCode}
                timeScale={timeScale}
                rotateSpeed={rotateSpeed}
                bgColor={bgColor}
                showOutline={showOutline}
                outlineColor={outlineColor}
                outlineSize={outlineSize}
                outlineOpacity={outlineOpacity}
                antiAliasing={antiAliasing}
            />
        </div>
    );
}

export default Display;
