// Helper function to convert paise to rupees
  export const toRupees = (amount) => {
    if (!amount) return "";
    return (amount / 100).toFixed(2);
  };