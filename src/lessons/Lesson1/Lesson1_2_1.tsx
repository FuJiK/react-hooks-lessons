import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState<{ id: number; name: string }[]>([]);

  return (
    <div>
      <h1>Inspiring sculptors:</h1>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</Button>
        <br />
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
