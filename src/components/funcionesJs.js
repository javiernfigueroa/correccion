export function formatNumber(num) {
    return new Intl.NumberFormat('de-CL').format(num);
}