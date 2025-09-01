// The data model for a feedback is as follows
/*
{
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
}
*/

let feedbackArray = [];

let nextId = 1;

function getAll() {
    return feedbackArray;
}

function addOne(sender, message, rating) {
    // Check if any parameter is empty or undefined
    if (!sender || !message || !rating) {
        return false;
    }

    const newFeedback = {
        id: nextId++, // Assigns a unique id and increments it
        sender,
        message,
        rating
    }

    feedbackArray.push(newFeedback); // Adds the new feedback to the array
    return newFeedback; // Returns the added feedback object
}

function findById(id) {
    const numericId = Number(id);
    const feedback = feedbackArray.find((item) => item.id === numericId);
    if (feedback) {
        return feedback;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData) {
    const feedback = findById(id);
    if (feedback) {
        if (updatedData.sender) {
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message) {
            feedback.message = updatedData.message;
        }
        if (updatedData.rating) {
            feedback.rating = updatedData.rating;
        }
        return feedback;
    }
    return false;
}

function deleteOneById(id) {
    const feedback = findById(id);
    if (feedback) {
        const initialLength = feedbackArray.length;
        feedbackArray = feedbackArray.filter((feedback) => feedback.id !== Number(id));
        return feedbackArray.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
}

if (require.main === module) {
    let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 5);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("updateOneById called:", updateOneById(1, { sender: "Jane Doe", message: "Great session on React components! I found the examples very helpful.", rating: 4 }));
    console.log("findById called after item updated:", findById(1));
    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

module.exports = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};