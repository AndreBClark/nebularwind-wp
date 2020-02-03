import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import sassGlob from 'gulp-sass-glob';
import './postcss.config'
const styles = {
    entry: ['../styles/**/*.css', '../styles/**/*.scss'],
    source: '../styles/entry.scss',
    destination: '../',
    filename: 'style.css'
}
const templates = {
    twig: '../templates/**/*.twig',
}

export function dev() {
    return gulp.src(styles.entry)
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(rename(styles.filename))
        .pipe(gulp.dest(styles.destination.dev))
}

export function build() {
    return gulp.src(styles.entry)
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(cleanCss())
        .pipe(cssnano())
        .pipe(rename(styles.filename))
        .pipe(gulp.dest(styles.destination.dev))
}
export function watch() {
    gulp.watch(styles.source, gulp.series(dev));
}
export function watchClean() {
    gulp.watch(styles.source, gulp.series(purge));
}