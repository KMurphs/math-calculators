
@REM echo /app >>.gitignore


@REM https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy
robocopy public app /MIR



@REM https://blog.bloomca.me/2017/12/15/how-to-push-folder-to-github-pages.html
rm -rf dist && npm run build && \
cd dist && git init && git add . \
&& git commit -m "Initial commit" && \
git remote add origin git@github.com:Bloomca/equalizer.git && \
git push --force origin master:gh-pages

(del /s /q app\\* || cd) && (rmdir /s /q app || cd) && npm run build && (robocopy public app /MIR || cd) && cd app && git init && git add . && git commit -m \"Initial commit\" && git remote add origin https://github.com/KMurphs/math-calculators.git && git push --force origin main:gh-pages


