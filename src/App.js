import { useEffect, useRef, useState } from "react";
import logo from "./100Dijeron.png";
import popupImage from "./X.png";

function App() {
    let object = [
        {
            question:
                "¿Cuál es el país más grande del mundo por área terrestre?",
            answers: [
                { value: "Rusia", points: 10 },
                { value: "Canadá", points: 8 },
                { value: "Estados Unidos", points: 6 },
                { value: "China", points: 4 },
                { value: "Brasil", points: 2 },
            ],
        },
        {
            question: '¿Qué ciudad es conocida como "La Ciudad de las Luces"?',
            answers: [
                { value: "París", points: 10 },
                { value: "Nueva York", points: 8 },
                { value: "Tokio", points: 6 },
                { value: "Londres", points: 4 },
                { value: "Sídney", points: 2 },
            ],
        },
        {
            question: '¿Quién es el autor de la famosa obra "Romeo y Julieta"?',
            answers: [
                { value: "William Shakespeare", points: 10 },
                { value: "Miguel de Cervantes", points: 8 },
                { value: "Charles Dickens", points: 6 },
                { value: "Jane Austen", points: 4 },
                { value: "Fiodor Dostoyevski", points: 2 },
            ],
        },
        {
            question: '¿Qué país es conocido como "La Tierra de los Faraones"?',
            answers: [
                { value: "Egipto", points: 10 },
                { value: "India", points: 8 },
                { value: "Grecia", points: 6 },
                { value: "China", points: 4 },
                { value: "México", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el océano más grande del mundo?",
            answers: [
                { value: "Océano Pacífico", points: 10 },
                { value: "Océano Atlántico", points: 8 },
                { value: "Océano Índico", points: 6 },
                { value: "Océano Antártico", points: 4 },
                { value: "Océano Ártico", points: 2 },
            ],
        },
        {
            question: '¿Qué ciudad es conocida como "La Ciudad del Amor"?',
            answers: [
                { value: "París", points: 10 },
                { value: "Roma", points: 8 },
                { value: "Venecia", points: 6 },
                { value: "Praga", points: 4 },
                { value: "Kioto", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el país más visitado del mundo por turistas?",
            answers: [
                { value: "Francia", points: 10 },
                { value: "Estados Unidos", points: 8 },
                { value: "España", points: 6 },
                { value: "Italia", points: 4 },
                { value: "China", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el monumento más famoso del mundo?",
            answers: [
                { value: "La Torre Eiffel", points: 10 },
                { value: "La Gran Muralla China", points: 8 },
                { value: "El Coliseo Romano", points: 6 },
                { value: "La Estatua de la Libertad", points: 4 },
                { value: "El Taj Mahal", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el idioma más hablado en el mundo?",
            answers: [
                { value: "Chino mandarín", points: 10 },
                { value: "Español", points: 8 },
                { value: "Inglés", points: 6 },
                { value: "Hindi", points: 4 },
                { value: "Árabe", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la ciudad más poblada del mundo?",
            answers: [
                { value: "Tokio, Japón", points: 10 },
                { value: "Shanghái, China", points: 8 },
                { value: "Ciudad de México, México", points: 6 },
                { value: "Delhi, India", points: 4 },
                { value: "São Paulo, Brasil", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la red social más utilizada en el mundo?",
            answers: [
                { value: "Facebook", points: 10 },
                { value: "YouTube", points: 8 },
                { value: "Instagram", points: 6 },
                { value: "WhatsApp", points: 4 },
                { value: "Twitter", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el deporte más popular a nivel mundial?",
            answers: [
                { value: "Fútbol (Soccer)", points: 10 },
                { value: "Baloncesto (Basketball)", points: 8 },
                { value: "Críquet", points: 6 },
                { value: "Tenis", points: 4 },
                { value: "Golf", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la comida callejera más popular en México?",
            answers: [
                { value: "Tacos al pastor", points: 10 },
                { value: "Elote (maíz)", points: 8 },
                { value: "Tortas", points: 6 },
                { value: "Tostadas", points: 4 },
                { value: "Quesadillas", points: 2 },
            ],
        },
        {
            question: "¿Qué día de la semana es el más común para comer tacos?",
            answers: [
                { value: "Martes (Taco Tuesday)", points: 10 },
                { value: "Viernes", points: 8 },
                { value: "Sábado", points: 6 },
                { value: "Domingo", points: 4 },
                { value: "Miércoles", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la bebida gaseosa más popular en México?",
            answers: [
                { value: "Coca-Cola", points: 10 },
                { value: "Pepsi", points: 8 },
                { value: "Jarritos", points: 6 },
                { value: "Sangría Señorial", points: 4 },
                { value: "Boing", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el sitio arqueológico más famoso de México?",
            answers: [
                { value: "Chichén Itzá", points: 10 },
                { value: "Teotihuacán", points: 8 },
                { value: "Palenque", points: 6 },
                { value: "Tulum", points: 4 },
                { value: "Monte Albán", points: 2 },
            ],
        },
        {
            question: "¿Qué día se celebra la Independencia de México?",
            answers: [
                { value: "16 de septiembre", points: 10 },
                { value: "15 de septiembre", points: 8 },
                { value: "20 de noviembre", points: 6 },
                { value: "1 de diciembre", points: 4 },
                { value: "5 de mayo", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la banda de música más popular en México?",
            answers: [
                { value: "Banda MS", points: 10 },
                { value: "Banda El Recodo", points: 8 },
                { value: "Los Tigres del Norte", points: 6 },
                { value: "La Arrolladora Banda El Limón", points: 4 },
                { value: "Banda Machos", points: 2 },
            ],
        },
        {
            question:
                "¿Cuál es la tradición mexicana más conocida en todo el mundo?",
            answers: [
                { value: "Día de los Muertos", points: 10 },
                { value: "Piñatas en las fiestas", points: 8 },
                { value: "Celebración de las Posadas", points: 6 },
                { value: "Desfile del 16 de Septiembre", points: 4 },
                { value: "Juguetes de madera artesanales", points: 2 },
            ],
        },
        {
            question:
                "¿Qué instrumento musical es más asociado con la música mexicana?",
            answers: [
                { value: "Guitarra", points: 10 },
                { value: "Mariachi (violín)", points: 8 },
                { value: "Trompeta", points: 6 },
                { value: "Guitarrón", points: 4 },
                { value: "Acordeón", points: 2 },
            ],
        },
        {
            question:
                "¿Cuál es la palabra o frase en español que los extranjeros más asocian con México?",
            answers: [
                { value: "¡Ay, caramba!", points: 10 },
                { value: "¡Arriba, arriba!", points: 8 },
                { value: "¡Olé!", points: 6 },
                { value: "¡Viva México!", points: 4 },
                { value: "¡Qué chido!", points: 2 },
            ],
        },
        {
            question:
                "¿Qué figura histórica mexicana es la más famosa en todo el mundo?",
            answers: [
                { value: "Frida Kahlo", points: 10 },
                { value: "Emiliano Zapata", points: 8 },
                { value: "Benito Juárez", points: 6 },
                { value: "Pancho Villa", points: 4 },
                { value: "Hernán Cortés", points: 2 },
            ],
        },
        {
            question: "¿Qué animal es más representativo de México?",
            answers: [
                { value: "Águila Real", points: 10 },
                { value: "Jaguar", points: 8 },
                { value: "Chihuahua", points: 6 },
                { value: "Tortuga Marina", points: 4 },
                { value: "Xoloitzcuintle", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la ciudad más grande de México?",
            answers: [
                { value: "Ciudad de México (CDMX)", points: 10 },
                { value: "Guadalajara", points: 8 },
                { value: "Monterrey", points: 6 },
                { value: "Puebla", points: 4 },
                { value: "Tijuana", points: 2 },
            ],
        },
        {
            question:
                "¿Cuál es el platillo mexicano más popular en todo el país?",
            answers: [
                { value: "Tacos", points: 10 },
                { value: "Tamales", points: 8 },
                { value: "Enchiladas", points: 6 },
                { value: "Pozole", points: 4 },
                { value: "Mole", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el destino turístico más visitado de México?",
            answers: [
                { value: "Cancún", points: 10 },
                { value: "Ciudad de México (CDMX)", points: 8 },
                { value: "Playa del Carmen", points: 6 },
                { value: "Puerto Vallarta", points: 4 },
                { value: "Tulum", points: 2 },
            ],
        },
        {
            question:
                "¿Qué bebida típica mexicana es la más popular en las fiestas?",
            answers: [
                { value: "Margarita", points: 10 },
                { value: "Michelada", points: 8 },
                { value: "Tequila", points: 6 },
                { value: "Mezcal", points: 4 },
                { value: "Horchata", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el día festivo más importante en México?",
            answers: [
                { value: "Día de los Muertos", points: 10 },
                { value: "Día de la Independencia", points: 8 },
                { value: "Navidad", points: 6 },
                { value: "Semana Santa", points: 4 },
                { value: "Día de la Revolución", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el deporte más popular en México?",
            answers: [
                { value: "Fútbol (Soccer)", points: 10 },
                { value: "Béisbol", points: 8 },
                { value: "Lucha Libre", points: 6 },
                { value: "Boxeo", points: 4 },
                { value: "Basquetbol", points: 2 },
            ],
        },
        {
            question:
                "¿Cuál es el programa de televisión más icónico de México?",
            answers: [
                { value: "El Chavo del Ocho", points: 10 },
                { value: "La Rosa de Guadalupe", points: 8 },
                { value: "Vecinos", points: 6 },
                { value: "Mira Quién Baila", points: 4 },
                { value: "Bailando por un Sueño", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la capital de Australia?",
            answers: [
                { value: "Camberra", points: 10 },
                { value: "Sídney", points: 8 },
                { value: "Melbourne", points: 6 },
                { value: "Brisbane", points: 4 },
                { value: "Perth", points: 2 },
            ],
        },
        {
            question:
                '¿Qué país es conocido como "La Tierra del Sol Naciente"?',
            answers: [
                { value: "Japón", points: 10 },
                { value: "España", points: 8 },
                { value: "Italia", points: 6 },
                { value: "México", points: 4 },
                { value: "Australia", points: 2 },
            ],
        },
        {
            question:
                "¿Cuál es el país más pequeño del mundo en términos de área terrestre?",
            answers: [
                { value: "Ciudad del Vaticano", points: 10 },
                { value: "Mónaco", points: 8 },
                { value: "Nauru", points: 6 },
                { value: "Tuvalu", points: 4 },
                { value: "San Marino", points: 2 },
            ],
        },
        {
            question: "¿Cuál es la montaña más alta del mundo?",
            answers: [
                { value: "Monte Everest", points: 10 },
                { value: "Monte Kilimanjaro", points: 8 },
                { value: "Monte McKinley (Denali)", points: 6 },
                { value: "Monte Aconcagua", points: 4 },
                { value: "Mont Blanc", points: 2 },
            ],
        },
        {
            question: "¿Cuál es el río más largo del mundo?",
            answers: [
                { value: "Río Amazonas", points: 10 },
                { value: "Río Nilo", points: 8 },
                { value: "Río Yangtsé", points: 6 },
                { value: "Río Misisipi", points: 4 },
                { value: "Río Danubio", points: 2 },
            ],
        },
        {
            question: "¿En qué país se encuentra el famoso Taj Mahal?",
            answers: [
                { value: "India", points: 10 },
                { value: "Pakistán", points: 8 },
                { value: "Bangladesh", points: 6 },
                { value: "Sri Lanka", points: 4 },
                { value: "Nepal", points: 2 },
            ],
        },
    ];
    const [clickedAnswers, setClickedAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [imageCount, setImageCount] = useState(0);

    const handleButtonClick = (index) => {
        setClickedAnswers((prevClicked) => {
            if (prevClicked.includes(index)) {
                return prevClicked.filter((i) => i !== index);
            } else {
                return [...prevClicked, index];
            }
        });
    };

    const handlePreviousQuestion = () => {
        setClickedAnswers([]);
        setCurrentQuestionIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : object.length - 1
        );
    };

    const handleNextQuestion = () => {
        setClickedAnswers([]);
        setCurrentQuestionIndex((prevIndex) =>
            prevIndex < object.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handleImageButtonClick = (count) => {
        setImageCount(count);
        setTimeout(() => {
            setImageCount(0);
        }, 3000);
    };

    useEffect(() => {
        document.title = object[currentQuestionIndex].question;
    }, [currentQuestionIndex]);

    return (
        <div className="App min-h-screen flex flex-col items-center bg-white">
            <header className="flex flex-col items-center w-full">
                <img
                    src={logo}
                    className="App-logo w-48 h-48 mb-2"
                    alt="logo"
                />
                <div className="border-t-4 border-blue-500 w-11/12 mb-4"></div>
            </header>
            <main className="w-full flex flex-col items-center">
                <div className="flex justify-between w-full px-4 mb-2">
                    <button
                        className="border border-blue-500 text-blue-500 bg-white py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
                        onClick={handlePreviousQuestion}
                    >
                        Previous
                    </button>
                    <div className="text-xl">
                        Question {currentQuestionIndex + 1} of {object.length}
                    </div>
                    <button
                        className="border border-blue-500 text-blue-500 bg-white py-2 px-4 rounded hover:bg-blue-500 hover:text-white"
                        onClick={handleNextQuestion}
                    >
                        Next
                    </button>
                </div>
                <h2 className="text-2xl mb-2">
                    {object[currentQuestionIndex].question}
                </h2>
                <div className="flex space-x-4 mb-2">
                    <button
                        className="border border-red-500 text-red-500 bg-white py-2 px-4 rounded hover:bg-red-500 hover:text-white"
                        onClick={() => handleImageButtonClick(1)}
                    >
                        Show 1 Image
                    </button>
                    <button
                        className="border border-red-500 text-red-500 bg-white py-2 px-4 rounded hover:bg-red-500 hover:text-white"
                        onClick={() => handleImageButtonClick(2)}
                    >
                        Show 2 Images
                    </button>
                    <button
                        className="border border-red-500 text-red-500 bg-white py-2 px-4 rounded hover:bg-red-500 hover:text-white"
                        onClick={() => handleImageButtonClick(3)}
                    >
                        Show 3 Images
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {object[currentQuestionIndex].answers.map(
                        (answer, index) => (
                            <AdjustableButton
                                key={index}
                                index={index}
                                answer={answer}
                                clickedAnswers={clickedAnswers}
                                handleButtonClick={handleButtonClick}
                            />
                        )
                    )}
                </div>
            </main>
            {imageCount > 0 && (
                <div className="fixed inset-0 flex items-center justify-center space-x-4">
                    {Array.from({ length: imageCount }).map((_, idx) => (
                        <img
                            key={idx}
                            src={popupImage}
                            alt="Popup"
                            className="w-64 h-auto"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

const AdjustableButton = ({
    index,
    answer,
    clickedAnswers,
    handleButtonClick,
}) => {
    const [fontSize, setFontSize] = useState(24); // Initial font size
    const buttonRef = useRef(null);

    useEffect(() => {
        const checkOverflow = () => {
            const button = buttonRef.current;
            if (button) {
                const isOverflowing =
                    button.scrollWidth > button.clientWidth ||
                    button.scrollHeight > button.clientHeight;
                if (isOverflowing && fontSize > 10) {
                    // Ensure font size doesn't get too small
                    setFontSize((prevSize) => prevSize - 1);
                }
            }
        };
        checkOverflow();
    }, [fontSize, answer.value]);

    return (
        <button
            ref={buttonRef}
            className={`border border-blue-500 text-blue-500 bg-white py-8 px-16 rounded text-xl hover:bg-blue-500 hover:text-white ${
                clickedAnswers.includes(index) ? "bg-blue-500 text-white" : ""
            }`}
            style={{
                width: "350px",
                height: "150px",
                fontSize: `${fontSize}px`,
            }}
            onClick={() => handleButtonClick(index)}
        >
            {clickedAnswers.includes(index) ? (
                <div>
                    <p>{answer.value}</p>
                    <p>{answer.points} puntos</p>
                </div>
            ) : (
                index + 1
            )}
        </button>
    );
};

export default App;
