'use client';

import React, { useEffect, useState } from 'react';
import { tickerMessages, tickerSpeed, tickerBackground, tickerTextColor } from '../ticker/ticker-config';

export default function Ticker(): React.JSX.Element {
    const [currentPosition, setCurrentPosition] = useState<number>(0);
    const [combinedMessage, setCombinedMessage] = useState<string>('');

    useEffect(() => {
        // Format messages to look like stock tickers
        const formattedMessages = tickerMessages.map(msg => `[ ${msg} ]`);
        const message = formattedMessages.join('     ');
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
        <div className={`w-full ${tickerBackground} sticky top-0 z-50 border-b border-gray-600`}>
            <div className="h-8 flex items-center overflow-hidden">
                <div
                    className={`whitespace-nowrap ${tickerTextColor} font-mono text-sm tracking-wider`}
                    style={{
                        transform: `translateX(-${currentPosition}px)`,
                        transition: 'transform 0.05s linear'
                    }}
                >
                    {combinedMessage + '     ' + combinedMessage}
                </div>
            </div>
        </div>
    );
} 