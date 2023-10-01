/// <reference types="@google/model-viewer" />
import React from "react";
import "@google/model-viewer/";

type ModelViewerElement = React.DetailedHTMLProps<
React.AllHTMLAttributes<
  Partial<globalThis.HTMLElementTagNameMap["model-viewer"]>
>,
Partial<globalThis.HTMLElementTagNameMap["model-viewer"]>
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerElement;
    }
  }
}

function ModelViewer(props: ModelViewerElement) {
  return <model-viewer {...props} />;
}
export default ModelViewer;
