document.addEventListener('DOMContentLoaded', () => {
    // Basic digital signage script.
    // In a real environment, this might fetch fresh data,
    // cycle through different products, or handle screen refresh logic.

    console.log("Nacho Supreme Display Initialized");

    // Optional: Auto-reload to keep content fresh on digital signage
    // This simulates a signage player reloading its playlist every few minutes
    const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

    setTimeout(() => {
        window.location.reload();
    }, REFRESH_INTERVAL_MS);
});
