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
            if (openCount === 3) {
                targetDetails.innerHTML = `
                    <summary>
                        IQ-TREE
                    </summary>
                    <p>
                        You need a high IQ to understand this tree. Your IQ is not high enough. 
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
