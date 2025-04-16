// SidebarCards.jsx
import React from "react";

const SidebarCards = ({ schema, data }) => {
  if (!schema || !data) return null;

  return (
    /* 
      grid-cols-2 -> 2 columns
      gap-4        -> spacing between cards
    */
    <div className="grid grid-cols-2 gap-4">
      {schema.cards.map((card, cardIndex) => {
        // Check if a card needs to be hidden
        if (card.hideIf && eval(card.hideIf)(data)) {
          return null;
        }

        // If "width" is "full" in schema, let it span 2 columns (1 wide card in a row)
        const colSpan = card.width === "full" ? "col-span-2" : "";
        
        return (
          <div
            key={cardIndex}
            className={`${colSpan} border border-gray-200 rounded p-4 bg-white shadow-sm`}
          >
            {/* Card Title */}
            <h2 className="text-md font-semibold mb-4">{card.title}</h2>
            
            {/* Card Fields */}
            <div className="space-y-2">
              {card.fields?.map((field, fieldIndex) => {
                // Evaluate or read the field’s value
                let value;
                const extractor = field.fieldNameOrExtractor;
                
                if (extractor?.startsWith("(")) {
                  // WARNING: using eval for demonstration only; consider a safer approach
                  try {
                    const fn = eval(extractor);
                    value = fn(data);
                  } catch {
                    value = "Error processing field";
                  }
                } else {
                  value = data[extractor];
                }

                // If hideIfEmpty is true and there's no value, skip
                if (field.hideIfEmpty && !value) {
                  return null;
                }

                // Each field is displayed as “Label: Value”
                return (
                  <div
                    key={fieldIndex}
                    className="flex justify-between border-b border-gray-100 pb-1 last:border-b-0"
                  >
                    <span className="text-gray-600">{field.label}</span>
                    <span className="font-medium ml-2">
                      {value ?? "N/A"} {field.unit || ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarCards;
