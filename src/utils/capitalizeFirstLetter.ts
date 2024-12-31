export const capitalizeFirstLetter = (inputStr: string) => {
    if (!inputStr) return ''; // Handle empty or null strings
    return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
}