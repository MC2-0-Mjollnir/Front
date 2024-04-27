import { useEffect } from "react";
import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

const IFC = () => {
    useEffect(() => {
        const container = document.getElementById("viewer-container");
        const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
        viewer.axes.setAxes();
        viewer.grid.setGrid();
        
        const input = document.getElementById("file-input");
        
        window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
        window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
        viewer.clipper.active = true;
        
        window.onkeydown = (event) => {
            if (event.code === "KeyP") {
                viewer.clipper.createPlane();
            } else if (event.code === "KeyO") {
                viewer.clipper.deletePlane();
            }
        };
        
        input.addEventListener(
            "change",
            async (changed) => {
                const file = changed.target.files[0];
                const ifcURL = URL.createObjectURL(file);
                console.log(ifcURL)
                console.log(file)
                viewer.IFC.loadIfcUrl(file);
            },
            false
        );
    }, [])
    
    return (
        <>
            <input type="file" id="file-input" />
            <div id="viewer-container"></div>
        </>
    )
}

export default IFC
