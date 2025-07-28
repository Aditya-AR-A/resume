// projects/index.ts
export const projectList = [
    {
      name: "ChessHelper",
      component: () => import("./items/ChessHelper"),
    },
    {
      name: "CopilotExtension",
      component: () => import("./items/CopilotExtension"),
    },
    {
      name: "GenderEmotionDetection",
      component: () => import("./items/GenderEmotionDetection"),
    },
    {
      name: "LinkedInSentiment",
      component: () => import("./items/LinkedInSentiment"),
    },
    {
      name: "RealEstatePrice",
      component: () => import("./items/RealEstatePrice"),
    },
    {
      name: "DummyProject",
      component: () => import("./items/DummyProject"),
    },
  ];