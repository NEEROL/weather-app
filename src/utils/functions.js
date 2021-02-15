export const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isNight = (sunrise, sunset) => {
    const now = new Date();
    const utc = Math.round(new Date(now.getTime() + now.getTimezoneOffset() * 60000).getTime() / 1000);

    if (utc < sunrise || utc > sunset) return true;
    else return false;
};
