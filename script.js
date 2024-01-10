
    function createArray(size, minValue, maxValue) {
            return Array.from({length: size }, () => {
            const value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return value;
        });

    }

    async function visualizeSorting() {
        const arrayContainer = document.getElementById('arrayContainer');
    const originalArray = createArray(10, 10, 100);
    const array = [...originalArray];

    arrayContainer.innerHTML = '';
        array.forEach(value => {
            const bar = document.createElement('div');
    bar.style.height = `${value * 3}px`;
    bar.textContent = value;
    bar.classList.add('bar');
    arrayContainer.appendChild(bar);
        });

    // Bubble Sort algorithm implementation
    for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                const bars = document.querySelectorAll('.bar');

    bars[j].style.backgroundColor = '#ff7675';
                
                await new Promise(resolve =>
                    setTimeout(() => {
        resolve();
    console.log("running")
                    }, 300)
    );

                if (array[j] > array[j + 1]) {
                    // Swap the bars if necessary
                    const temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;

    // Update the visualization
    bars[j].style.height = `${array[j] * 3}px`;
    bars[j + 1].style.height = `${array[j + 1] * 3}px`;

    bars[j].textContent = array[j];
    bars[j + 1].textContent = array[j + 1];
                }

    bars[j].style.backgroundColor = '#3498db'; // Reset the color
            }
        }

    // Reset the color of all bars after sorting is complete
    const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
        bar.textContent = array[index];
        });

        // Reset the color of all bars after sorting is complete
        bars.forEach(bar => {
        bar.style.backgroundColor = '#2ecc71';
        });
    }

