// Tonnage validation (Business rule aware)
function validateProcurement(sourceType, tonnage) {
    // Must not be empty
    // syntax error: missing parenthesis
    //if (!tonnage {
    // fix
    if(!tonnage) {
        throw new Error("Tonnage is required");
    } 
    // Must be numeric
    else if (isNaN(tonnage)) {
        // syntax error: missing closing quotation mark
        // throw new Error("Tonnage must be a number);
        // fix
        throw new Error("Tonnage must be a number");

    } 
    // Special rule for Individual Dealers
    // logical error: using = instead of ===
    // else if (sourceType = "Individual Dealer" && tonnage < 1000) { 
    // logical fix
    else if (sourceType === "Individual Dealer" && tonnage < 1000) { 
        throw new Error("Individual dealers must supply at least 1000kg (1 ton)");
    // syntax error: missing closing braces for else if
    // fix
    }
    // General minimum tonnage Must be at least 3 digits (100kg minimum)
    else if (tonnage < 100) {
        // logical error
        // throw new Error("Tonnage must be less than 100kg") 
        // Logical Fix: 
        throw new Error("Tonnage must be at least 100kg (3 digits)");
    } 
    // Runtime error – calling .length on a number
    // else if(tonnage.length < 3) {
    // Runtime Error Fix using try-catch
    try{
        if(tonnage.length < 3){
            throw new Error("Tonnage must be at least 3 digits");
        }
    } catch (error) {
        console.error(error.message);
    }

    // Passed all checks
    console.log("Tonnage is valid:", tonnage, "kg");
}


try {
    // validateProcurement("Individual Dealer", 500); // ❌ Throws: "Individual dealers must supply at least 1000kg"

    // validateProcurement("Company", 500); // ✅ Passes — OK

    // validateProcurement("Company", 50); // ❌ Throws: "Tonnage must be at least 100kg (3 digits)"

   validateProcurement("Individual Dealer", "AB"); // ❌ Throws: "Tonnage must be a number"
} catch (error) {
    console.error("Validation error:", error.message)
} finally {
    console.log("Tonnage validation completed.");
}



