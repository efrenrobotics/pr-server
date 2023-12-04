// import db

/**
 * Packing assistant
 * Makes request to OpenAI api, based on user parameters
 *
 */
class Packer {
  //     /* OpenAI Simple Post Req,
  //    Destination - Number of Days, Season */
  // router.post("/simplePack", async (req, res, next) => {
  //     const [destination, numDays, season] = req;
  //     /* POST helper method, through controller
  //        RETURN JSON packing list */
  //     return res.status(201).json({ message: "simple Post" });
  //   });
  simplePack(req, res) {
    
    return res.status(200).send({
      success: "true",
      message: "simple pack is succesful",
    });
  }
}

const packerController = new Packer();
module.exports = packerController;
