import { useState, useCallback } from "react";
import Field from "./Field";
import update from "immutability-helper";

import dummyData from "./dummyData.json";

const SortingDiv = () => {
  const [fields, setFields] = useState(dummyData);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = fields[dragIndex];
      setFields(
        update(fields, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [fields]
  );
  console.log(fields);

  return (
    <div>
      {fields.map((field, index) => {
        if (field.length === undefined) {
          return (
            <Field
              key={field.id}
              index={index}
              id={field.id}
              text={field.color}
              field={field}
              moveCard={moveCard}
            />
          );
        } else {
          return (
            <Field
              key={field[0].id}
              index={index}
              id={field[0].id}
              text={field[0].color}
              field={field}
              moveCard={moveCard}
            />
          );
        }
      })}
    </div>
  );
};

export default SortingDiv;
