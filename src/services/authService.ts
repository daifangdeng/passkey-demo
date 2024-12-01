// src/services/authService.js

const BASE_URL = "http://localhost:8000" // 根据你的服务器地址进行调整

export const generateRegistrationOptions = async () => {
  const response = await fetch(`${BASE_URL}/generate-registration-options`)
  if (!response.ok) {
    throw new Error("Failed to generate registration options")
  }
  return response.json()
}

export const verifyRegistration = async (registrationResponse) => {
  const response = await fetch(`${BASE_URL}/verify-registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationResponse),
  })
  if (!response.ok) {
    throw new Error("Failed to verify registration")
  }
  return response.json()
}

export const generateAuthenticationOptions = async () => {
  const response = await fetch(`${BASE_URL}/generate-authentication-options`)
  if (!response.ok) {
    throw new Error("Failed to generate authentication options")
  }
  return response.json()
}

export const verifyAuthentication = async (authenticationResponse) => {
  const response = await fetch(`${BASE_URL}/verify-authentication`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authenticationResponse),
  })
  if (!response.ok) {
    throw new Error("Failed to verify authentication")
  }
  return response.json()
}
