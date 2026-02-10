const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	  res.writeHead(200, { "Content-Type": "text/html" });

	  res.end(`
	      <!DOCTYPE html>
	          <html>
		      <head>
		            <title>AWS App Runner</title>
			          <meta charset="UTF-8" />
				      </head>
				          <body style="
					        margin:0;
						      height:100vh;
						            display:flex;
							          align-items:center;
								        justify-content:center;
									      background:#0f172a;
									            color:white;
										          font-family:Arial, Helvetica, sans-serif;
											      ">
											            <div style="text-align:center;">
												            <h1 style="font-size:48px; font-weight:900;">
													              HELLO FROM AWS APP RUNNER 🚀
														              </h1>
															              <p style="font-size:24px; font-weight:700;">
																                Container deployment successful
																		        </p>
																			        <p style="font-size:18px; font-weight:600;">
																				          Status: LIVE ✅
																					          </p>
																						        </div>
																							    </body>
																							        </html>
																								  `);
});

server.listen(PORT, () => {
	  console.log(`App Runner listening on port ${PORT}`);
});

