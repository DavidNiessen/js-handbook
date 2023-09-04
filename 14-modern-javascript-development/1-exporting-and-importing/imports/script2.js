export const PI = 3.142;

export const add = (a, b) => a + b;
export const mp = (a, b) => a * b;

// Exports must always be at top level
if (true) {
    // THIS WOULD NOT WORK
    // export const x = 3;
}

export default () => console.log('DEFAULT EXPORT');