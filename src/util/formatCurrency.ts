const CURRNECY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: 'currency'
});

export function formatCurrency(number: number) {
    return CURRNECY_FORMATTER.format(number);
}