import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
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

CommonContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};

export default CommonContext;
