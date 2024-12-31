export const convertMphToKph = (mph: number) => {
    const conversionFactor = 1.60934; // 1 mile = 1.60934 kilometers
    return parseFloat((mph * conversionFactor).toFixed(2)); // Rounded to 2 decimal places
}