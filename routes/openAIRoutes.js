const router = require("express").Router();
const fetch = require("node-fetch");
require("dotenv").config();
const apiKey = process.env.OPENAI_API_KEY;
// console.log(`apiKey: ${apiKey}`);

router.get("/", async (req, res, next) => {
  return res.status(200).json({ message: "in OpenAi route" });
});

router.post("/simple_pack", async (req, res, next) => {
  const { gender, num_days, destination, travel_type, season } = req.body;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a packing list maker that must create a list of packing items for a person going on a trip based on their destination, number of days travelling, and type of trip (business, family, friends, etc..) return a JSON with a list of items to pack. The different categories are clothing, every-day carries, and hygiene",
        },
        {
          role: "user",
          content: `Create a packing list for a ${gender} going on a ${num_days} day trip to ${destination} on a ${travel_type} trip during ${season}`,
        },
      ],
    }),
  };

  try {
    console.log("making req to openai completions endpoint");
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );

    // if (!response.ok) {
    //   throw new Error(
    //     `OpenAI API request failed with status: ${response.status}`
    //   );
    // }

    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
