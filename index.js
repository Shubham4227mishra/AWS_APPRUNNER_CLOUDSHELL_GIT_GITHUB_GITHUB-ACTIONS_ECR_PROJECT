const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
    <title>Live on AWS App Runner</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
	    body {
	          margin: 0;
		        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
			      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
			            color: #ffffff;
				          min-height: 100vh;
					        display: flex;
						      align-items: center;
						            justify-content: center;
							        }

								    .container {
								          max-width: 1000px;
									        width: 100%;
										      padding: 40px;
										          }

											      .hero {
											            text-align: center;
												          margin-bottom: 50px;
													      }

													          .badge {
														        display: inline-block;
															      padding: 6px 14px;
															            background: rgba(0, 255, 255, 0.2);
																          color: #00ffff;
																	        border-radius: 20px;
																		      font-weight: 600;
																		            margin-bottom: 15px;
																			        }

																				    h1 {
																				          font-size: 2.8rem;
																					        margin: 10px 0;
																						    }

																						        h1 span {
																							      color: #00ffff;
																							          }

																								      .subtitle {
																								            font-size: 1.1rem;
																									          opacity: 0.9;
																										      }

																										          .grid {
																											        display: grid;
																												      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
																												            gap: 25px;
																													        }

																														    .card {
																														          background: rgba(255, 255, 255, 0.1);
																															        border-radius: 16px;
																																      padding: 25px;
																																            backdrop-filter: blur(10px);
																																	          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
																																		      }

																																		          .card h3 {
																																			        color: #00ffff;
																																				      margin-bottom: 10px;
																																				          }

																																					      .card p {
																																					            font-size: 0.95rem;
																																						          line-height: 1.6;
																																							        opacity: 0.95;
																																								    }

																																								        footer {
																																									      text-align: center;
																																									            margin-top: 50px;
																																										          font-size: 0.85rem;
																																											        opacity: 0.7;
																																												    }
																																												      </style>
																																												      </head>

																																												      <body>
																																												        <div class="container">
																																													    <div class="hero">
																																													          <div class="badge">● LIVE</div>
																																														        <h1>Hello from <span>AWS App Runner</span></h1>
																																															      <p class="subtitle">
																																															              Node.js container deployed via GitHub Actions → Amazon ECR → App Runner
																																																            </p>
																																																	        </div>

																																																		    <div class="grid">
																																																		          <div class="card">
																																																			          <h3>🚀 Deployment</h3>
																																																				          <p>
																																																					            Fully automated CI/CD pipeline using GitHub Actions.
																																																						              Docker images are built, pushed to Amazon ECR, and deployed automatically.
																																																							              </p>
																																																								            </div>

																																																									          <div class="card">
																																																										          <h3>☁️ Runtime</h3>
																																																											          <p>
																																																												            Platform: AWS App Runner<br/>
																																																													              Auto-scaling, HTTPS, zero infrastructure management.
																																																														              </p>
																																																															            </div>

																																																																          <div class="card">
																																																																	          <h3>📊 Live Info</h3>
																																																																		          <p>
																																																																			            Hostname: <b>${os.hostname()}</b><br/>
																																																																				              Server Time: <b>${new Date().toLocaleString()}</b><br/>
																																																																					                OS: <b>${os.platform()}</b>
																																																																							        </p>
																																																																								      </div>

																																																																								            <div class="card">
																																																																									            <h3>🔐 Security</h3>
																																																																										            <p>
																																																																											              Private Amazon ECR registry.<br/>
																																																																												                CI/CD authenticated using GitHub Secrets (Org-restricted account).
																																																																														        </p>
																																																																															      </div>
																																																																															          </div>

																																																																																      <footer>
																																																																																            © ${new Date().getFullYear()} · Shubham Mishra · AWS App Runner Demo
																																																																																	        </footer>
																																																																																		  </div>
																																																																																		  </body>
																																																																																		  </html>
																																																																																		  `;

																																																																																		  const server = http.createServer((req, res) => {
																																																																																		    res.writeHead(200, { "Content-Type": "text/html" });
																																																																																		      res.end(html);
																																																																																		      });

																																																																																		      server.listen(PORT, () => {
																																																																																		        console.log(`Server running on port ${PORT}`);
																																																																																			});

