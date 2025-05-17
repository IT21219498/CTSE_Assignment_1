import { createContext, useContext, useState } from "react";
import ToastContext from "./ToastContext";

const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const { toast } = useContext(ToastContext);

  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  return (
    <CommonContext.Provider
      value={{
        selectedCourseId,
        setSelectedCourseId,
        isEnrolled,
        setIsEnrolled,
        selectedCompanyId,
        setSelectedCompanyId,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContext;
