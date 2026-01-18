document.addEventListener("DOMContentLoaded", function () {
    const anchor = document.querySelector("#join-us a");
    if (!anchor) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function createIframe(theme) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://discord.com/widget?id=1462340210120720386&theme=${theme}`;
        iframe.setAttribute("allowtransparency", "true");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
            "sandbox",
            "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        );

        iframe.style.width = "95vw";
        iframe.style.height = "45vh";
        iframe.style.border = "0";

        return iframe;
    }

    let iframe = createIframe(mediaQuery.matches ? "dark" : "light");
    anchor.replaceWith(iframe);

    mediaQuery.addEventListener("change", function (e) {
        const newTheme = e.matches ? "dark" : "light";
        const newIframe = createIframe(newTheme);
        iframe.replaceWith(newIframe);
        iframe = newIframe;
    });
});