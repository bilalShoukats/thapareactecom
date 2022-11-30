const FormatPrices =({price})=>{

    return Intl.NumberFormat('en-pk', { 
        style:"currency",
        currency:'INR',
         maximumSignificantDigits: 2 }).format(price/100);
    

};
export default FormatPrices;