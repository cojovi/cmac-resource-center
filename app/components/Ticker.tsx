'use client';

import React, { useEffect, useState } from 'react';
import { tickerMessages, tickerSpeed, tickerBackground, tickerTextColor } from '../ticker/ticker-config';

export default function Ticker(): React.JSX.Element {
    const [currentPosition, setCurrentPosition] = useState<number>(0);
    const [combinedMessage, setCombinedMessage] = useState<string>('');

    useEffect(() => {
        // Combine all messages with spacing
        const message = tickerMessages.join('   ●   ') + '   ●   ';
        setCombinedMessage(message);

        // Animation function
        const animate = () => {
            setCurrentPosition((prevPosition: number) => {
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
        <div className={`w-full overflow-hidden ${tickerBackground} relative`}>
            <div className="py-3 px-4">
                <div
                    className={`whitespace-nowrap ${tickerTextColor} font-medium text-lg`}
                    style={{
                        transform: `translateX(-${currentPosition}px)`,
                        transition: 'transform 0.05s linear'
                    }}
                >
                    {combinedMessage + combinedMessage} {/* Duplicate message for smooth loop */}
                </div>
            </div>
        </div>
    );
} 