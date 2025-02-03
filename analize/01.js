
console.log(number(99));

function number(num)
{
    return (typeof num === "number" && (num>10 && num < 100))? true : false;
}

function canDrive(age, hasLicense)
{
    if (typeof age !== "number" || typeof hasLicense !== "boolean") {
        throw new Error("Invalid input: age must be a number and hasLicense must be a boolean");
    }
    return age >= 18 && hasLicense ? "Can drive" : "Cannot drive";
}