type Config = {
  [key: string]: string;
};
let config: Config | null = null;

export const loadConfig = async () => {
  const response = await fetch('/config.json');
  if (response.ok) {
    config = await response.json();
  } else {
    console.error('Failed to load configuration');
  }
};

export const getConfig = (key: string): string => {
  if (!config) {
    throw new Error('Configuration not found');
  }
  return config[key];
};
