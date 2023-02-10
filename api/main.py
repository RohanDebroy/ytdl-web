from starlette.responses import PlainTextResponse
from fastapi import FastAPI
app = FastAPI()


@app.get("/")
async def hello_world():
    return PlainTextResponse("Hello World")
