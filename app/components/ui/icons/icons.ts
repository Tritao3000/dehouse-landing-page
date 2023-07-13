import { getSystemErrorMap } from "util";

export const icons = {
  linkedin: "M8.93 25.599H3.623V8.508H8.93v17.091zM6.274 6.177H6.26a3.089 3.089 0 113.088-3.104v.004a3.1 3.1 0 01-3.072 3.1h-.002zm22.52 19.422h-5.296v-8.32c0-1.983-.04-4.526-2.759-4.526-2.759 0-3.182 2.154-3.182 4.383v8.462h-5.302V8.507h5.09v2.331h.074c.985-1.665 2.772-2.764 4.815-2.764.073 0 .145.001.217.004h-.01c5.371 0 6.359 3.537 6.359 8.131v9.389l-.006.001z",
  instagram: "M20 16.973a4 4 0 11-8 0 4 4 0 018 0zm9-6v12a7.008 7.008 0 01-7 7H10a7.007 7.007 0 01-7-7v-12a7.007 7.007 0 017-7h12a7.008 7.008 0 017 7zm-7 6a6 6 0 10-6 6 6.006 6.006 0 006-6zm3-7.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z",
  twitter: "M30.708 9.708l-3.738 3.738C26.215 22.198 18.834 29 10 29c-1.815 0-3.311-.288-4.447-.855-.917-.46-1.292-.95-1.385-1.09a1 1 0 01.48-1.492c.033-.012 3.03-1.163 4.935-3.355a13.866 13.866 0 01-2.735-3.025c-1.55-2.3-3.285-6.298-2.75-12.272a1 1 0 011.706-.615c.044.044 4.16 4.137 9.192 5.465V11a5.984 5.984 0 011.795-4.288 5.858 5.858 0 014.222-1.712 6.083 6.083 0 015.183 3H30a1 1 0 01.708 1.707z",
  arrowRight: 'M27.707 16.707l-9 9a1 1 0 11-1.415-1.415L24.587 17H5a1 1 0 110-2h19.586l-7.293-7.292a1 1 0 011.415-1.415l9 9a1.001 1.001 0 010 1.415z',
  parking: 'M10 28a1.929 1.929 0 01-1.417-.583A1.929 1.929 0 018 26V6c0-.556.194-1.028.583-1.417A1.929 1.929 0 0110 4h7.6c2.178 0 4.011.744 5.5 2.233 1.489 1.49 2.233 3.323 2.233 5.5 0 2.178-.744 4.011-2.233 5.5-1.489 1.49-3.322 2.234-5.5 2.234H12V26c0 .556-.194 1.028-.583 1.417A1.929 1.929 0 0110 28zm2-12.533h5.6c1.067 0 1.956-.356 2.667-1.067.71-.711 1.066-1.6 1.066-2.667 0-1.066-.355-1.955-1.066-2.666C19.556 8.356 18.667 8 17.6 8H12v7.467z',
  restaurants: 'M15.996 27.7c-.314 0-.62-.072-.917-.217a1.842 1.842 0 01-.746-.683L3.767 10.833a2.11 2.11 0 01-.334-1.55c.09-.566.356-1.005.8-1.316a22.04 22.04 0 015.6-2.917C11.833 4.35 13.89 4 16 4c2.111 0 4.167.35 6.167 1.05 2 .7 3.866 1.672 5.6 2.917.444.31.71.75.8 1.316a2.11 2.11 0 01-.334 1.55L17.667 26.8c-.2.3-.45.525-.75.675-.3.15-.607.225-.921.225zM16 25.767L26.7 9.633a26.81 26.81 0 00-5.106-2.6A15.552 15.552 0 0016 6c-1.934 0-3.801.344-5.6 1.033-1.8.69-3.5 1.556-5.1 2.6L16 25.767zm-3.665-12.6c.51 0 .943-.179 1.298-.536.356-.357.534-.79.534-1.3s-.179-.942-.536-1.298a1.773 1.773 0 00-1.3-.533c-.51 0-.942.178-1.298.535-.355.357-.533.79-.533 1.3s.178.943.535 1.298c.357.356.79.534 1.3.534zm3.667 7.166c.51 0 .942-.178 1.298-.535.356-.357.533-.79.533-1.3s-.178-.942-.535-1.298a1.773 1.773 0 00-1.3-.533c-.51 0-.942.178-1.298.535-.356.357-.533.79-.533 1.3s.178.942.535 1.298c.357.356.79.533 1.3.533z',
  gym: 'M27.533 12.5l-1.4-1.4 1.5-1.5L22.4 4.367l-1.5 1.5-1.433-1.434 1-1.033c.51-.511 1.144-.761 1.9-.75.755.011 1.389.272 1.9.783l4.3 4.3c.51.511.766 1.14.766 1.884s-.255 1.372-.766 1.883l-1.034 1zm-16 16.033c-.51.511-1.139.767-1.883.767s-1.372-.256-1.883-.767L3 23.767a1.957 1.957 0 01-.567-1.423c0-.563.19-1.033.567-1.41l1.467-1.467 1.433 1.4-1.5 1.5L9.633 27.6l1.5-1.5 1.4 1.433-1 1zm13.234-10.266l2.833-2.834L16.567 4.4l-2.834 2.833 11.034 11.034zM15.433 27.6l2.867-2.867L7.267 13.7 4.4 16.567 15.433 27.6zm.3-8.267l3.634-3.633-3.067-3.067-3.633 3.634 3.066 3.066zm1.1 9.667c-.376.378-.842.567-1.399.567-.556 0-1.023-.19-1.4-.567L3 17.967c-.378-.377-.567-.843-.567-1.4 0-.556.19-1.023.567-1.4L5.833 12.3c.387-.378.86-.567 1.423-.567.563 0 1.033.19 1.41.567l2.567 2.567L14.9 11.2l-2.567-2.567c-.377-.376-.566-.842-.566-1.399 0-.556.189-1.023.566-1.4l2.834-2.867c.386-.378.86-.567 1.423-.567.562 0 1.032.189 1.41.567L29.033 14c.378.386.567.86.567 1.423 0 .562-.189 1.033-.567 1.41l-2.866 2.834c-.377.377-.843.566-1.4.566-.555 0-1.023-.189-1.4-.566L20.8 17.1l-3.667 3.667 2.567 2.566c.378.386.567.86.567 1.423 0 .563-.19 1.033-.567 1.41L16.833 29z',
  beach: 'M22.667 6.867a2.342 2.342 0 01-1.717-.717 2.342 2.342 0 01-.717-1.717c0-.666.24-1.239.717-1.716A2.342 2.342 0 0122.667 2c.666 0 1.239.239 1.716.717.478.477.717 1.05.717 1.716 0 .667-.239 1.24-.717 1.717a2.342 2.342 0 01-1.716.717zM12 25.467h-.15a.33.33 0 01-.15-.034c-2.289-1.6-4.089-3.06-5.4-4.383-1.311-1.322-1.967-2.439-1.967-3.35 0-.556.234-.922.7-1.1a3.995 3.995 0 011.434-.267c.644 0 1.416.111 2.316.334.9.222 1.917.533 3.05.933l-.733-4.567c-.089-.51-.067-.977.067-1.4.133-.422.389-.755.766-1l3.534-2.366-3.6-.7-2.8 1.9a.959.959 0 01-.734.166.931.931 0 01-.633-.4 1.062 1.062 0 01-.167-.766.904.904 0 01.434-.634l2.766-1.9A1.97 1.97 0 0112.2 5.6l6.467 1.2a2.056 2.056 0 011.4 1.033L21.233 9.9a6.865 6.865 0 002.034 2.267c.844.6 1.8.989 2.866 1.166.245.045.45.156.617.334.167.177.25.389.25.633 0 .333-.111.594-.333.783a.968.968 0 01-.8.217 9.016 9.016 0 01-3.767-1.6 9.765 9.765 0 01-2.767-3.1l-3.666 2.467 4.566 3.6c.245.177.434.405.567.683.133.278.2.572.2.883v4.4c.378.267.733.528 1.067.784.333.255.677.527 1.033.816-.444.356-.928.65-1.45.884a4 4 0 01-1.65.35 4.184 4.184 0 01-1.7-.367 5.8 5.8 0 01-1.567-1.033c-.222-.2-.466-.3-.733-.3-.267 0-.511.1-.733.3A5.8 5.8 0 0113.7 25.1a4.184 4.184 0 01-1.7.367zm7-4.2V18.6l-5.533-3.833.566 3.8c.845.4 1.684.827 2.517 1.283.833.456 1.65.928 2.45 1.417zm-15 9.4h-.333a.971.971 0 01-.717-.284.971.971 0 01-.283-.716c0-.29.094-.528.283-.717a.971.971 0 01.717-.283H4c.578 0 1.144-.078 1.7-.234.556-.155 1.1-.433 1.633-.833A.976.976 0 018 27.367c.267 0 .489.077.667.233.533.4 1.077.678 1.633.833a6.274 6.274 0 001.7.234c.556 0 1.117-.084 1.683-.25a5.573 5.573 0 001.65-.817c.2-.133.428-.2.684-.2.255 0 .472.067.65.2.533.4 1.077.678 1.633.833a6.274 6.274 0 001.7.234c.556 0 1.117-.084 1.683-.25a5.573 5.573 0 001.65-.817c.178-.133.4-.2.667-.2s.489.067.667.2c.533.378 1.083.65 1.65.817.566.166 1.127.25 1.683.25h.333c.29 0 .528.094.717.283a.971.971 0 01.283.717.971.971 0 01-.283.716.971.971 0 01-.717.284H28a7.37 7.37 0 01-1.983-.284c-.678-.189-1.35-.539-2.017-1.05-.667.511-1.339.861-2.017 1.05a7.37 7.37 0 01-1.983.284 7.37 7.37 0 01-1.983-.284c-.678-.189-1.35-.539-2.017-1.05-.667.511-1.339.861-2.017 1.05a7.37 7.37 0 01-1.983.284 7.37 7.37 0 01-1.983-.284c-.678-.189-1.35-.539-2.017-1.05-.667.511-1.339.861-2.017 1.05A7.37 7.37 0 014 30.667z',
};