import { useState } from "react";

enum CompletionStatus {
  INCOMPLETE,
  COMPLETE,
  IN_PROGRESS,
}

const AddGameForm = () => {
  const [gameName, setGameName] = useState("");
  const [gamesConsole, setGamesConsole] = useState("");
  const [completionStatus, setCompletionStatus] = useState(
    CompletionStatus.INCOMPLETE
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitting game: ${gameName}`);
    console.log(`Console: ${gamesConsole}`);
    console.log(`Completion status: ${completionStatus}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Game Name
        <input
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
      </label>
      <label>
        Console
        <input
          type="text"
          value={gamesConsole}
          onChange={(e) => setGamesConsole(e.target.value)}
        />
      </label>
      <label>
        Completion Status
        <select
          value={completionStatus}
          onChange={(e) =>
            // @ts-ignore
            setCompletionStatus(e.target.value as CompletionStatus)
          }
        >
          <option value={CompletionStatus.INCOMPLETE}>Incomplete</option>
          <option value={CompletionStatus.COMPLETE}>Complete</option>
          <option value={CompletionStatus.IN_PROGRESS}>In Progress</option>
        </select>
      </label>
      <button type="submit">Add Game</button>
    </form>
  );
};

export default AddGameForm;
