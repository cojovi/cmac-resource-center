'use client';

import { useEffect, useState } from 'react';
import { tickerMessages, tickerSpeed, tickerBackground, tickerTextColor } from '../ticker/ticker-config';

export default function Ticker() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [combinedMessage, setCombinedMessage] = useState('');

    useEffect(() => {
        // Combine all messages with spacing
        const message = tickerMessages.join('   ●   ') + '   ●   ';
        setCombinedMessage(message);

        // Animation function
        const animate = () => {
            setCurrentPosition((prevPosition) => {
                // Reset position when it exceeds message length
                if (prevPosition > message.length * 10) {
                    return 0;
                }
                return prevPosition + 1;
            });
        };

        // Set up animation interval
        const intervalId = setInterval(animate, 1000 / tickerSpeed);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`w-full overflow-hidden ${tickerBackground}`}>
            <div className="py-2">
                <div
                    className={`whitespace-nowrap ${tickerTextColor} font-medium`}
                    style={{
                        transform: `translateX(-${currentPosition}px)`,
                    }}
                >
                    {combinedMessage + combinedMessage} {/* Duplicate message for smooth loop */}
                </div>
            </div>
        </div>
    );
} 