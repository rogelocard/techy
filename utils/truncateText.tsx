// Function to validate string descriptions that are longer than 25 will show ("...") in the name
export const truncateText = 
(str: string) => {
    if (str.length < 25) return str;
    
    return str.substring(0, 25) + "...";
};