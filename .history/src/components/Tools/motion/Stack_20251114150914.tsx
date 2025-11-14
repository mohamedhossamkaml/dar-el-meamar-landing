export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardsData = [],
  sendToBackOnClick = false,
  className = '',
  style = {}
}: StackProps) {
  const [cards, setCards] = useState(cardsData);

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      style={{ perspective: 1000, ...style }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="rounded-xl overflow-hidden border-4 border-white bg-gray-100 shadow-xl"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: 'center center'
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                width: '80%',
                maxWidth: '600px',
                aspectRatio: '16 / 9',
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
