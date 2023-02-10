from starlette.responses import PlainTextResponse, JSONResponse
from fastapi import FastAPI, HTTPException, status
from yt_dlp import YoutubeDL
from yt_dlp.version import __version__ as yt_dlp_version
from typing import Union

app = FastAPI(docs_url=None, redoc_url=None)


@app.get("/api/version")
async def version_info():
    return JSONResponse({"yt_dlp": yt_dlp_version})


@app.get("/api/info", )
async def get_info(url: str, quality: Union[str, None] = None):
    ydl_options = {
        "retries": 3,
        "encoding": "utf8",
        "noplaylist": True,
        "dump_single_json": True,
        "format": quality if quality else "bestvideo+bestaudio/best",
    }
    with YoutubeDL(ydl_options) as ytdl:
        try:
            response = ytdl.extract_info(url, download=False)
            return JSONResponse(response, headers={"Cache-Control": "s-maxage=2592000, stale-while-revalidate"})
        except Exception as e:
            print(e)
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=repr(
                e), headers={"Cache-Control": "no-store, max-age=0"})
