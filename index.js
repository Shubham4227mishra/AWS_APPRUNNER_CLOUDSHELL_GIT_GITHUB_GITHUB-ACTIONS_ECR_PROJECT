cat > index.js <<'EOF'
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	  const html = `
	    <!DOCTYPE html>
	      <html>
	        <head>
		    <title>AWS App Runner Live</title>
		        <style>
			      body {
			              margin: 0;
				              height: 100vh;
					              display: flex;
						              justify-content: center;
							              align-items: center;
								              font-family: Arial, sans-serif;
									              background: linear-gradient(135deg, #ff512f, #dd2476, #24c6dc);
										              color: white;
											            }
												          .box {
													          padding: 40px 60px;
														          background: rgba(0,0,0,0.35);
															          border-radius: 14px;
																          text-align: center;
																	        }
																		      h1 {
																		              font-size: 2.8rem;
																			              margin-bottom: 10px;
																				            }
																					          p {
																						          opacity: 0.9;
																							        }
																								    </style>
																								      </head>
																								        <body>
																									    <div class="box">
																									          <h1>🚀 LIVE from AWS App Runner</h1>
																										        <p>Deployed via GitHub Actions and App runner</p>
																											      <p>${new Date().toLocaleString()}</p>
																											          </div>
																												    </body>
																												      </html>
																												        `;
	  res.writeHead(200, { "Content-Type": "text/html" });
	  res.end(html);
});

server.listen(PORT, () => {
	  console.log(`Server running on port ${PORT}`);
});
EOF

