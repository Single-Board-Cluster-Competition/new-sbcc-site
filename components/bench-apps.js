document.addEventListener('DOMContentLoaded', () => {
    const benchApps = document.getElementById('bench-apps-content');
    if (!benchApps) return; // return if this section is empty

    const detailsElements = benchApps.querySelectorAll('details');
    if (detailsElements.length < 5) return; // make sure there are 5 benchmarks/apps

    const targetDetails = detailsElements[3]; // 0-based index --> 4th <details>

    let openCount = targetDetails.open ? 1 : 0;

    targetDetails.addEventListener('toggle', () => {
    // trigger on open
        if (targetDetails.open) {
            openCount++;

            // trigger on the second open
            if (openCount <= 5 && openCount >= 3) {
                targetDetails.innerHTML = `
                    <summary>
                        IQ-TREE
                    </summary>
                    <p>
                        You need a high IQ to understand this tree. Your IQ is not high enough. Keep clicking...
                        <br>
                        Link: 
                        <a href="https://github.com/iqtree/iqtree2">
                            https://github.com/iqtree/iqtree2
                        </a> 
                    </p>
                `;
            }
            else if (openCount <= 10 && openCount > 5) {
                targetDetails.innerHTML = `
                    <summary>
                        IQ-TREE
                    </summary>
                    <p>
                        Almost there...
                        <br>
                        Link: 
                        <a href="https://github.com/iqtree/iqtree2">
                            https://github.com/iqtree/iqtree2
                        </a> 
                    </p>
                `;
            }
            else if (openCount <= 25 && openCount > 10) {
                targetDetails.innerHTML = `
                    <summary>
                        IQ-TREE
                    </summary>
                    <p>
                        You can do it! Keep clicking...
                        <br>
                        Link: 
                        <a href="https://github.com/iqtree/iqtree2">
                            https://github.com/iqtree/iqtree2
                        </a> 
                    </p>
                `;
            }
            else if (openCount >= 45) {
                targetDetails.innerHTML = `
                    <summary>
                        IQ-TREE
                    </summary>
                    <p>
                        Phylogenomic analysis for massive datasets using complex evolutionary models. 
                        <br>
                        Link: 
                        <a href="https://github.com/iqtree/iqtree2">
                            https://github.com/iqtree/iqtree2
                        </a> 
                    </p>
                `;
            }
        }
    });
});
