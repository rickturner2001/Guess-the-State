import allStates from "../data/allStates.json";

const StatesTable = ({ guesses }: { guesses: string[] }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-center text-2xl">
        Current Score: {guesses.length}/{allStates.length}
      </h1>
      <div className="overflow-x-auto relative scrollbar scrollbar-thumb-gray-200 scrollbar-track-gray-100  w-full">
        <table className="max-w-md  md:w-[40rem] mx-auto  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Abbreviation
              </th>
            </tr>
          </thead>
          <tbody>
            {allStates.map((statesData, index) => {
              if (guesses.includes(statesData.val))
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="py-4 px-6">
                      {guesses.includes(statesData.val) ? statesData.name : "?"}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {guesses.includes(statesData.val) ? statesData.id : `?`}
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatesTable;
