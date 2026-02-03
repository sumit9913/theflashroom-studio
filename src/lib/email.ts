import emailjs from "@emailjs/browser";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
};

type BookPayload = {
  eventType: string;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  budget: string;
  requirements: string;
  referral: string;
};

const getEnv = (key: string) => {
  const value = import.meta.env[key] as string | undefined;
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

const getEmailConfig = () => {
  return {
    serviceId: getEnv("VITE_EMAILJS_SERVICE_ID"),
    publicKey: getEnv("VITE_EMAILJS_PUBLIC_KEY"),
    contactTemplateId: getEnv("VITE_EMAILJS_TEMPLATE_ID_CONTACT"),
    bookTemplateId: getEnv("VITE_EMAILJS_TEMPLATE_ID_BOOK"),
    toEmail: getEnv("VITE_EMAILJS_TO_EMAIL"),
  };
};

export const sendContactEmail = async (payload: ContactPayload) => {
  const config = getEmailConfig();

  return emailjs.send(
    config.serviceId,
    config.contactTemplateId,
    {
      ...payload,
      to_email: config.toEmail,
      form_type: "contact",
    },
    { publicKey: config.publicKey }
  );
};

export const sendBookEmail = async (payload: BookPayload) => {
  const config = getEmailConfig();

  return emailjs.send(
    config.serviceId,
    config.bookTemplateId,
    {
      ...payload,
      to_email: config.toEmail,
      form_type: "book",
    },
    { publicKey: config.publicKey }
  );
};
