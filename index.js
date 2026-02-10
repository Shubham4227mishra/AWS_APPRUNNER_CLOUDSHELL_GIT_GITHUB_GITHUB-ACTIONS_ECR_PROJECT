const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	  res.writeHead(200, { "Content-Type": "text/html" });

	  res.end(`
	  <!DOCTYPE html>
	  <html>
	  <head>
	    <title>Hello from AWS App Runner</title>
	      <meta charset="UTF-8" />
	      </head>

	      <body style="
	        margin:0;
		  height:100vh;
		    display:flex;
		      align-items:center;
		        justify-content:center;
			  font-family:Arial, Helvetica, sans-serif;
			    background: linear-gradient(135deg, #667eea, #764ba2, #ff6a00);
			      color:white;
			      ">
			        <div style="
				    text-align:center;
				        background: rgba(0,0,0,0.25);
					    padding: 50px 60px;
					        border-radius: 20px;
						    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
						      ">
						          <h1 style="
							        font-size:52px;
								      font-weight:900;
								            margin-bottom:20px;
									        ">
										      🚀 HELLO FROM <br/>
										            <span style="color:#00ffea;">AWS APP RUNNER</span>
											        </h1>

												    <p style="
												          font-size:24px;
													        font-weight:700;
														      margin-bottom:10px;
														            color:#ffeb3b;
															        ">
																      Container deployed successfully
																          </p>

																	      <p style="
																	            font-size:18px;
																		          font-weight:600;
																			        margin-top:20px;
																				    ">
																				          Status: <span style="color:#00ff6a;">LIVE ✅</span>
																					      </p>
																					        </div>
																						</body>
																						</html>
																						  `);
});

server.listen(PORT, () => {
	  console.log(`App Runner running on port ${PORT}`);
});

