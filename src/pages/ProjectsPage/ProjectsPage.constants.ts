import { CustomItemProps } from "components/CustomItem/CustomItem.type";
import ecommerceImg from "assets/images/ecommerce.png";
import erpImg from "assets/images/erp.jpg";
import DeliveryVideo from "assets/videos/demobrahmi.mp4";
import deliveryImg from "assets/images/delivery.png";

export const projectItems: CustomItemProps[] = [
  {
    imgs: ecommerceImg,
    description: "projects.ecommerceDescription",
    title: "projects.ecommerce",
    techStack: [
      "Node.js",
      "React.js",
      "Microservices",
      "Kafka",
      "MongoDB",
      "Docker",
      "JWT",
    ],
    githubLink: "https://github.com/AhmedBrahmi0001/Advanced_Ecom",
  },
  {
    imgs: erpImg,
    description: "projects.erpSystemDescription",
    title: "projects.erpSystem",
    techStack: ["PHP", "MySQL", "REST API", "ERP Integration"],
    githubLink: "",
  },
  {
    imgs: deliveryImg,
    video: DeliveryVideo, // ✅ THIS
    description: "projects.deliveryAppDescription",
    title: "projects.deliveryApp",
    techStack: [
      "React Native",
      "Laravel",
      "Pusher",
      "Socket.io",
      "Payment Integration",
    ],
    githubLink: "https://github.com/AhmedBrahmi0001/DeliverEase",
  },
];
