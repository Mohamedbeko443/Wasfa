const RecipesTableSkeleton = () => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden animate-pulse">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              {Array.from({ length: 7 }).map((_, i) => (
                <th key={i} className="px-6 py-4">
                  <div className="h-3 w-20 rounded bg-gray-200" />
                </th>
              ))}
            </tr>
          </thead>

          
          <tbody className="divide-y divide-gray-100">
            {Array.from({ length: 5 }).map((_, row) => (
              <tr key={row} className="hover:bg-gray-50/50">
                
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gray-200" />
                    <div className="h-4 w-40 rounded bg-gray-200" />
                  </div>
                </td>

                
                <td className="px-6 py-4">
                  <div className="h-8 w-8 rounded-full bg-gray-200 mx-auto" />
                </td>

                
                <td className="px-6 py-4">
                  <div className="h-4 w-10 rounded bg-gray-200" />
                </td>

                
                <td className="px-6 py-4">
                  <div className="h-4 w-14 rounded bg-gray-200" />
                </td>

                
                <td className="px-6 py-4">
                  <div className="h-4 w-10 rounded bg-gray-200" />
                </td>

                
                <td className="px-6 py-4">
                  <div className="h-6 w-20 rounded-full bg-gray-200" />
                </td>

                
                <td className="px-6 py-4 text-right">
                  <div className="ml-auto h-8 w-8 rounded-full bg-gray-200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipesTableSkeleton;
