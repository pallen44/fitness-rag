import { apiAppName } from "../../config.js";

export type HealthStatus = {
  service: string;
  status: "ok";
};

export function getHealthStatus(): HealthStatus {
  return {
    service: apiAppName,
    status: "ok"
  };
}

