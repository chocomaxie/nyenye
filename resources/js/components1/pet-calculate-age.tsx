    // // This file contains the core logic for calculating the Pet Life Stage.
    // // It is intended for use in the frontend (React/Vue/Inertia) before form submission.

    // // --- Pet Age Stage Data Definition ---
    // // All stages are defined in months for unified calculation.

    // export const AGE_STAGES = {
    //     Cat: [
    //         { name: "Kitten", maxMonths: 6 },
    //         { name: "Junior", maxMonths: 2 * 12 }, // 2 years = 24 months
    //         { name: "Prime", maxMonths: 6 * 12 }, // 6 years = 72 months
    //         { name: "Mature", maxMonths: 10 * 12 }, // 10 years = 120 months
    //         { name: "Senior", maxMonths: 14 * 12 }, // 14 years = 168 months
    //         { name: "Geriatric", maxMonths: Infinity },
    //     ],
    //     Dog: [
    //         { name: "Puppy", maxMonths: 6 },
    //         { name: "Junior", maxMonths: 9 },
    //         { name: "Adult", maxMonths: 6.5 * 12 }, // 6.5 years = 78 months
    //         { name: "Mature", maxMonths: 9.75 * 12 }, // 9.75 years = 117 months
    //         { name: "Senior", maxMonths: 13 * 12 }, // 13 years = 156 months
    //         { name: "Geriatric", maxMonths: Infinity },
    //     ],
    // };

    // /**
    //  * Converts the given age and unit (months/years) into a total number of months.
    //  * @param {number} age - The age value.
    //  * @param {string} unit - 'months' or 'years'.
    //  * @returns {number} Total age in months.
    //  */
    // export const convertToMonths = (age, unit) => {
    //     // Ensures age is a valid number
    //     const numericAge = parseFloat(age);
    //     if (isNaN(numericAge) || numericAge <= 0) return 0;

    //     if (unit === 'years') {
    //         return numericAge * 12;
    //     }
    //     return numericAge; // If unit is 'months'
    // };

    // /**
    //  * Determines the life stage of the pet based on type and age in months.
    //  * @param {string} type - 'Cat' or 'Dog'.
    //  * @param {number} ageInMonths - The total age in months.
    //  * @returns {string} The determined age stage name (e.g., "Kitten", "Adult").
    //  */
    // export const calculateStage = (type, ageInMonths) => {
    //     // Ensures there is a valid type and age
    //     if (!type || ageInMonths <= 0 || !AGE_STAGES[type]) return 'Awaiting Input';

    //     const stages = AGE_STAGES[type];

    //     // Find the stage where the current age falls
    //     const currentStage = stages.find(stage => ageInMonths <= stage.maxMonths);

    //     return currentStage ? currentStage.name : 'Unknown Stage';
    // };

    // // --- INSTRUCTIONAL EXAMPLE FOR FORM SUBMISSION ---
    // /*
    // // 1. Import the functions in your form component (e.g., PetAdoptionForm.jsx):
    // // import { convertToMonths, calculateStage } from '.../calculateAgeStage.js';

    // // 2. Use them inside your submission handler:
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Assuming 'data' contains the form fields: { pname, age, age_unit, ... }

    //     // a. Calculate age in months
    //     const ageInMonths = convertToMonths(data.age, data.age_unit);

    //     // b. Calculate the stage (Assuming 'pname' holds the pet type: 'Cat' or 'Dog')
    //     const petStage = calculateStage(data.pname, ageInMonths);

    //     // c. Prepare the final data payload
    //     const dataToSend = {
    //         ...data,
    //         pet_stage: petStage
    //     };

    //     // d. Submit the data using Inertia
    //     // inertia.post('/adoption', dataToSend);

    //     console.log("Calculated Pet Stage:", petStage);
    // };

    // // NOTE: You MUST create a 'pet_stage' column in your 'adoptions' database table
    // // using a migration for this data to be saved successfully.
    // */
