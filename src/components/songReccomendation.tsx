'use client'
import React, { useState } from 'react';
import { PlayCircle, Share2, Clock, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SpotifyCardProps {
    url: string;
}

const SpotifyCard = ({ url }: SpotifyCardProps) => {
    const [trackData] = useState( {
        title: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera",
        duration: "5:55",
        releaseYear: "1975",
        genre: "Rock"
    } );

    return (
        <Card className="w-full h-full bg-zinc-900 text-white overflow-hidden">
            <CardContent className="p-0 h-full flex flex-col">
                {/* Cover Art Section (50% of height) */}
                <div className="relative h-1/2">
                    <img
                        src="/api/placeholder/400/400"
                        alt="Album Cover"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity opacity-0 hover:opacity-100 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-green-400 cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                </div>

                {/* Track Info Section (50% of height) */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                    {/* Title and Artist */}
                    <div className="space-y-1">
                        <h2 className="text-lg font-bold leading-tight truncate">{trackData.title}</h2>
                        <p className="text-sm text-zinc-400 truncate">{trackData.artist}</p>
                    </div>

                    {/* Album and Duration */}
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-xs text-zinc-400">
                            <Music className="w-3 h-3 mr-1" />
                            <span className="truncate">{trackData.album}</span>
                        </div>
                        <div className="flex items-center text-xs text-zinc-400">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{trackData.duration}</span>
                        </div>
                    </div>

                    {/* Tags and Share */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                        <div className="flex space-x-1">
                            <span className="px-2 py-0.5 text-xs rounded-full bg-zinc-800">{trackData.genre}</span>
                            <span className="px-2 py-0.5 text-xs rounded-full bg-zinc-800">{trackData.releaseYear}</span>
                        </div>
                        <button className="p-1.5 rounded-full hover:bg-zinc-800 transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SpotifyCard;
