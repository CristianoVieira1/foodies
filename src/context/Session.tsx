import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { Auth } from "../models/Auth";
import { Session } from "../models/Session";
import LocalStorage from "../persistence/LocalStorage";
import { WithChildren } from "../types";
import { Session as SessionSchema } from "../types/Session";

interface Schema {
  session: SessionSchema;
  removeSession: () => Promise<void>;
  fetchLastSession: () => Promise<void>;
  setSession: Dispatch<SetStateAction<SessionSchema>>;
  updateAccessToken: (accessToken: string) => Promise<void>;
  handleSigInGoogle: () => Promise<void>;
}

export const SessionContext = createContext({} as Schema);

export const UserSessionProvider = ({ children }: WithChildren) => {
  const [session, setSession] = useState<SessionSchema>({} as SessionSchema);

  const fetchLastSession = async (): Promise<void> => {
    const currentSession = await new Session().get();
    setSession(currentSession);
  };

  const removeSession = async () => {
    await new Auth().clearAccessToken();
    await LocalStorage.cleanUser();
    setSession({} as SessionSchema);
  };

  /////google
  const handleSigInGoogle = async (): Promise<void> => {
    // const { user } = await GoogleSignin.signIn();
    // const sessionSchema = await new Session().mountSessionSchema(user);

    // await LocalStorage.setUser(user);
    setSession((prevSession) => ({
      ...prevSession,
      // ...sessionSchema,
    }));
  };

  const updateAccessToken = async (accessToken: string): Promise<void> => {
    await new Auth().setAccessToken(accessToken);
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        removeSession,
        fetchLastSession,
        updateAccessToken,
        handleSigInGoogle,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);

  if (context) {
    return context;
  }

  throw new Error(
    "Invalid useSession usage! It should be nested into UserSessionProvider."
  );
};
